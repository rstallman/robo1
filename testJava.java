public class testJava {


    /**
     * max elem
     */
    public static double maxArr(double[] arr) {


        double res = arr[0];

        for (double elem:arr) {
            if (elem > res)
                res = elem;
        }

        return res;

    }


    public static void main(String[] args) {
        
        System.out.println("Ok, java works fine!");

        double[] arr =  new double[] {1, 3, 600, 10, 100, 2.0, 3};

        double res = testJava.maxArr(arr);

        System.out.println("res: " + res);
    }


}