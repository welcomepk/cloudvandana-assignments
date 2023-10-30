public class ShuffleArray {

    public static void shuffleArray(int[] arr) {

        int len = arr.length;

        for (int i = 0; i < arr.length; i++) {
            int randomIndex = i + (int) (Math.random() * (len - i));
            int tmp = arr[i];
            arr[i] = arr[randomIndex];
            arr[randomIndex] = tmp;
        }
    }

    public static void main(String[] args) {

        int[] arr = { 1, 2, 3, 4, 5 };
        shuffleArray(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i] + " ");
        }
    }
}