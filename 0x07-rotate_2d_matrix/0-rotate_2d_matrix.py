#!/usr/bin/python3


def rotate_2d_matrix(matrix):
    """
    Rotate a 2D matrix 90 degrees clockwise in-place.

    Args:
    matrix (List[List[int]]): The input n x n 2D matrix.

    Returns:
    None (The matrix is modified in-place).
    """
    n = len(matrix)

    # Transpose the matrix (rows become columns)
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    # Reverse each row to complete the rotation
    for row in matrix:
        row.reverse()


# Example usage:
if __name__ == "__main__":
    matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    rotate_2d_matrix(matrix)
    for row in matrix:
        print(row)
