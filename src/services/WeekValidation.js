export default function WeekValidation(day) {
  switch (day) {
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
    case "sábado":
    case "domingo":
      break;
    default:
      window.alert("Selecione algum dia da semana");
  }
}
