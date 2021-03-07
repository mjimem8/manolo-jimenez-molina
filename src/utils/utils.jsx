export const calculateMoths = (startDate) => {
    var months;
    var today = new Date();
    months = (today.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += today.getMonth();

    return months <= 0 ? 0 : months;
}