function formattedName(str: string) {
  if (str?.length === 0) {
    return;
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
export default formattedName;
