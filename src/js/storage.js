/**
 * Local Storage Manager for Fitness Routine Completion Tracking
 * 
 * Stores routine completion data in browser localStorage with the following structure:
 * {
 *   routineName: string,
 *   startTime: ISO timestamp,
 *   endTime: ISO timestamp,
 *   totalTimeSpent: number (seconds),
 *   totalRoutineDuration: number (seconds),
 *   completionPercentage: number (0-100),
 *   completed: boolean (true if routine finished naturally, false if ended early)
 * }
 * 
 * Data is sharded by year and month to improve performance:
 * - fitness_routine_completions_2025_09
 * - fitness_routine_completions_2025_10
 * etc.
 */

const STORAGE_KEY_PREFIX = 'fitness_routine_completions';

/**
 * Generate storage key for a given date (defaults to current date)
 * @param {Date} date - Date to generate key for
 * @returns {string} Storage key for the given month/year
 */
function getStorageKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    return `${STORAGE_KEY_PREFIX}_${year}_${month}`;
}

/**
 * Get completion records for a specific month/year
 * @param {Date} date - Date to get records for (defaults to current date)
 * @returns {Array} Array of completion records for that month
 */
function getMonthlyRoutineHistory(date = new Date()) {
    try {
        const storageKey = getStorageKey(date);
        const data = localStorage.getItem(storageKey);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error reading routine history from localStorage:', error);
        return [];
    }
}

/**
 * Get all stored routine completion records across all months
 * @param {number} monthsBack - Number of months back to include (defaults to 12)
 * @returns {Array} Array of all completion records
 */
export function getRoutineHistory(monthsBack = 12) {
    try {
        const allRecords = [];
        const currentDate = new Date();
        
        // Get records for current month and previous months
        for (let i = 0; i < monthsBack; i++) {
            const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
            const monthlyRecords = getMonthlyRoutineHistory(targetDate);
            allRecords.push(...monthlyRecords);
        }
        
        // Sort by start time (most recent first)
        return allRecords.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
    } catch (error) {
        console.error('Error reading routine history from localStorage:', error);
        return [];
    }
}

/**
 * Record the start of a routine
 * @param {string} routineName - Name of the routine
 * @param {number} totalDuration - Total duration of the routine in seconds
 * @returns {string} - Session ID for tracking this routine instance
 */
export function recordRoutineStart(routineName, totalDuration) {
    const now = new Date();
    const sessionId = `${routineName}_${now.getTime()}`;
    const startRecord = {
        sessionId,
        routineName,
        startTime: now.toISOString(),
        endTime: null,
        totalTimeSpent: 0,
        totalRoutineDuration: totalDuration,
        completionPercentage: 0,
        completed: false
    };

    try {
        const storageKey = getStorageKey(now);
        const monthlyHistory = getMonthlyRoutineHistory(now);
        monthlyHistory.push(startRecord);
        localStorage.setItem(storageKey, JSON.stringify(monthlyHistory));
        console.log('Routine start recorded:', startRecord);
        return sessionId;
    } catch (error) {
        console.error('Error recording routine start:', error);
        return sessionId; // Return sessionId even if storage fails
    }
}

/**
 * Update routine progress and completion data
 * @param {string} sessionId - Session ID of the routine instance
 * @param {number} timeSpentSeconds - Time spent in seconds
 * @param {boolean} isCompleted - Whether the routine was completed naturally (not ended early)
 */
export function updateRoutineCompletion(sessionId, timeSpentSeconds, isCompleted = false) {
    try {
        const now = new Date();
        let recordFound = false;
        let targetStorageKey = null;
        let targetRecord = null;
        
        // Search in current month first, then previous months if needed
        for (let i = 0; i < 3; i++) { // Search up to 3 months back (routines shouldn't span more than a month)
            const searchDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const storageKey = getStorageKey(searchDate);
            const monthlyHistory = getMonthlyRoutineHistory(searchDate);
            const recordIndex = monthlyHistory.findIndex(record => record.sessionId === sessionId);
            
            if (recordIndex !== -1) {
                targetStorageKey = storageKey;
                targetRecord = monthlyHistory[recordIndex];
                recordFound = true;
                
                const completionPercentage = Math.min(100, (timeSpentSeconds / targetRecord.totalRoutineDuration) * 100);
                
                // Update the record
                targetRecord.endTime = now.toISOString();
                targetRecord.totalTimeSpent = timeSpentSeconds;
                targetRecord.completionPercentage = Math.round(completionPercentage * 100) / 100; // Round to 2 decimal places
                targetRecord.completed = isCompleted;

                // Save back to localStorage
                localStorage.setItem(storageKey, JSON.stringify(monthlyHistory));
                console.log('Routine completion updated:', targetRecord);
                break;
            }
        }
        
        if (!recordFound) {
            console.warn('No routine record found for session:', sessionId);
        }
    } catch (error) {
        console.error('Error updating routine completion:', error);
    }
}

/**
 * Get completion statistics (useful for future features)
 * @returns {Object} Statistics about routine completions
 */
export function getCompletionStats() {
    try {
        const history = getRoutineHistory();
        const stats = {
            totalRoutines: history.length,
            completedRoutines: history.filter(r => r.completed).length,
            averageCompletion: 0,
            totalTimeSpent: 0
        };

        if (history.length > 0) {
            stats.averageCompletion = history.reduce((sum, record) => sum + record.completionPercentage, 0) / history.length;
            stats.totalTimeSpent = history.reduce((sum, record) => sum + record.totalTimeSpent, 0);
        }

        return stats;
    } catch (error) {
        console.error('Error calculating completion stats:', error);
        return { totalRoutines: 0, completedRoutines: 0, averageCompletion: 0, totalTimeSpent: 0 };
    }
}

/**
 * Clear all routine completion data (useful for testing or user preference)
 * @param {number} monthsBack - Number of months back to clear (defaults to 24 months)
 */
export function clearRoutineHistory(monthsBack = 24) {
    try {
        const currentDate = new Date();
        let clearedCount = 0;
        
        // Clear records for current month and previous months
        for (let i = 0; i < monthsBack; i++) {
            const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
            const storageKey = getStorageKey(targetDate);
            
            if (localStorage.getItem(storageKey)) {
                localStorage.removeItem(storageKey);
                clearedCount++;
            }
        }
        
        console.log(`Routine history cleared for ${clearedCount} months`);
    } catch (error) {
        console.error('Error clearing routine history:', error);
    }
}

/**
 * Get all storage keys used by the fitness routine tracker
 * @param {number} monthsBack - Number of months back to check (defaults to 24)
 * @returns {Array} Array of storage keys that exist
 */
export function getExistingStorageKeys(monthsBack = 24) {
    const existingKeys = [];
    const currentDate = new Date();
    
    for (let i = 0; i < monthsBack; i++) {
        const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        const storageKey = getStorageKey(targetDate);
        
        if (localStorage.getItem(storageKey)) {
            existingKeys.push(storageKey);
        }
    }
    
    return existingKeys;
}
