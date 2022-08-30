export default function chooseClassByIndex(index, css) {
  switch (index) {
    case 0:
      return css.item1;
    case 1:
      return css.item2;
    case 2:
      return css.item3;
    case 3:
      return css.item4;
    case 4:
      return css.item5;
    default:
      break;
  }
}
