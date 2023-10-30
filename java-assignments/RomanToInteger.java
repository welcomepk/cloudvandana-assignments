import java.util.HashMap;

public class RomanToInteger {

    static HashMap<Character, Integer> romanMap = new HashMap<>();

    static {
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);
    }

    public static int romanToInteger(String roman) {
        roman = roman.toUpperCase();
        int result = 0;
        for (int i = 0; i < roman.length(); i++) {
            if (i > 0 && romanMap.get(roman.charAt(i)) > romanMap.get(roman.charAt(i - 1))) {
                result += romanMap.get(roman.charAt(i)) - 2 * romanMap.get(roman.charAt(i - 1));
            } else {
                result += romanMap.get(roman.charAt(i));
            }
        }

        return result;
    }

    public static void main(String[] args) {
        String romanNumeral = "Ix";
        int integerEquivalent = romanToInteger(romanNumeral);
        System.out.println("Integer equivalent of " + romanNumeral.toUpperCase() + " is " + integerEquivalent);
    }
}
