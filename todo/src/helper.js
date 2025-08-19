// vanilla javascript method to calculate fibonacci sequence with n numbers as parameter
export function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}