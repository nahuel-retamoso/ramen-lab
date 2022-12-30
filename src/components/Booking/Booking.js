import './Booking.css';

function getDays () {
        // Primero, obtenemos la fecha actual
    const hoy = new Date();

    // Luego, obtenemos el número del mes actual (0-based index)
    const mesActual = hoy.getMonth();

    // Ahora, creamos una fecha para el primer día del mes actual
    const primerDiaMes = new Date(hoy.getFullYear(), mesActual, 1);

    // Finalmente, podemos iterar sobre cada día del mes y hacer algo con ellos
    const diasDelMes = [];
    while (primerDiaMes.getMonth() === mesActual) {
    diasDelMes.push(primerDiaMes.getDate());
    primerDiaMes.setDate(primerDiaMes.getDate() + 1);
    }

    return(diasDelMes);    
}

const Booking = () => {
    return (
        <div className="Booking">
            <h1>Make your reservation</h1>
            <div className="Booking__form">
                <div className="Booking__form__group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
            </div>
        </div>
    );
}

export default Booking;