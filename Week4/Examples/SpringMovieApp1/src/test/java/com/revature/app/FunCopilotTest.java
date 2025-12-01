package com.revature.app;


import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;

import org.junit.jupiter.api.Test;

public class FunCopilotTest {

    @Test
    void isitEven_withEvenNumber_returnsTrue() {
        FunCopilot funCopilot = new FunCopilot();
        assertTrue(funCopilot.isitEven(2));
    }

    @Test
    void isitEven_withOddNumber_returnsFalse() {
        FunCopilot funCopilot = new FunCopilot();
        assertFalse(funCopilot.isitEven(3));
    }

    @Test
    void isitEven_withZero_returnsTrue() {
        FunCopilot funCopilot = new FunCopilot();
        assertTrue(funCopilot.isitEven(0));
    }

    @Test
    void isitEven_withNegativeEvenNumber_returnsTrue() {
        FunCopilot funCopilot = new FunCopilot();
        assertTrue(funCopilot.isitEven(-4));
    }

    @Test
    void isitEven_withNegativeOddNumber_returnsFalse() {
        FunCopilot funCopilot = new FunCopilot();
        assertFalse(funCopilot.isitEven(-5));
    }
}

