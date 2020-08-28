module.exports = function(total_seconds) {
	var seconds = total_seconds % 60;
    var total_minutes = Math.floor(total_seconds / 60);
    var minutes = total_minutes % 60;
    var hours = Math.floor(total_minutes / 60);
    var minutes_display = ("00" + String(minutes)).slice(-2);
    var seconds_display = ("00" + String(seconds)).slice(-2);
    var formatted = hours > 0 ? `${hours}:` : "";
    formatted += `${minutes_display}:${seconds_display}`;
    return formatted;
};