export function formatDate(date: string){
    const [ano, mes, dia] = date.split('-')
    return `${dia}/${mes}/${ano}`
}