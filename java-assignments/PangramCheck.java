public class PangramCheck {
    public static boolean isPangram(String sentence) {
        sentence = sentence.toLowerCase();
        boolean[] alphabetCheck = new boolean[26];

        for (int i = 0; i < sentence.length(); i++) {
            char ch = sentence.charAt(i);
            if ('a' <= ch && ch <= 'z') {
                alphabetCheck[ch - 'a'] = true;
            }
        }

        for (boolean value : alphabetCheck) {
            if (!value) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        String inputSentence = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(inputSentence);

        if (isPangram) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
    }
}
