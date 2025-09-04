export default {
    "name": "Split Test",
    "groups": ["Test"],
    "sub_routines": [
        {
            "name": "Split Testing",
            "intervals": [
                {
                    "name": "Two Split Exercise",
                    "duration": 30,
                    "benefits": "Testing split=2 functionality",
                    "execution_notes": "Should beep at 15 seconds",
                    "split": 2
                },
                {
                    "name": "Three Split Exercise",
                    "duration": 30,
                    "benefits": "Testing split=3 functionality",
                    "execution_notes": "Should beep at 20 and 10 seconds",
                    "split": 3
                },
                {
                    "name": "No Split Exercise",
                    "duration": 20,
                    "benefits": "Testing no split functionality",
                    "execution_notes": "Should only beep at end"
                }
            ],
            "sets": 1,
            "start_delay": 5,
            "end_delay": 0
        }
    ]
};
