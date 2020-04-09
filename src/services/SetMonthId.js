export default function SetMonthId(month) {
  let id;
  switch (month) {
    case "janeiro":
      id = 0;
      break;
    case "fevereiro":
      id = 1;
      break;
    case "março":
      id = 2;
      break;
    case "abril":
      id = 3;
      break;
    case "maio":
      id = 4;
      break;
    case "junho":
      id = 5;
      break;
    case "julho":
      id = 6;
      break;
    case "agosto":
      id = 7;
      break;
    case "setembro":
      id = 8;
      break;
    case "outubro":
      id = 8;
      break;
    case "novembro":
      id = 10;
      break;
    case "dezembro":
      id = 11;
      break;
    default:
      window.alert("Selecione algum mês");
  }

  return id;
}
