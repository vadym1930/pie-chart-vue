export default {
  /**
   * Generates comma separated string with color stops values
   * Accept an array of objects { color: 'valid color', value: number }
   *
   * @param {array} arr
   *
   * @returns string
   */
  generateStyle(arr = []) {
    if (!arr[Symbol.iterator]) {
      arr = [];
    }

    let acum = 0;
    let styles = arr.map(
      segment => `${segment.color} 0 ${(acum += Number(segment.value))}%`
    );

    return styles.join(",");
  }
};
