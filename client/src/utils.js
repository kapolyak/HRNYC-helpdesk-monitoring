module.exports = {
  sortByHelpdeskCount: (staffArray) => {
    staffArray.sort((a, b) => {
      if (a.helpdeskCount > b.helpdeskCount) {
        return -1;
      } else {
        return 1;
      }
    });
    return staffArray;
  }
}