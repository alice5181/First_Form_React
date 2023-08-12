import React, { useState } from 'react';
import './RegistrationForm.css'; // Importa el archivo CSS

const RegistrationForm = () => {
    const [user, setUser] = useState({
        fullName: '',
        age: '',
        favoritePokemon: '',
    });

    const [showRegistration, setShowRegistration] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.fullName.trim() !== '' && user.age !== '' && user.favoritePokemon.trim() !== '') {
            setShowRegistration(true);
            setError(false);
        } else {
            setShowRegistration(false);
            setError(true);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    return (
        <form onSubmit={handleSubmit} className="registration-form"> {/* Asigna la clase CSS */}
            <label>Nombre completo: </label>
            <input type="text" name="fullName" onChange={handleChange} />

            <label>Edad: </label>
            <input type="number" name="age" onChange={handleChange} />

            <label>Pokemon favorito: </label>
            <input type="text" name="favoritePokemon" onChange={handleChange} />

            <button>Registrarse</button>

            {error && <h6 className="error-message">Por favor, complete todos los campos</h6>} {/* Asigna la clase CSS */}
            
            {showRegistration && (
                <div className="success-message"> {/* Asigna la clase CSS */}
                    <h4>¡Gracias por registrarte, {user.fullName}!</h4>
                    <p>Edad: {user.age}</p>
                    <p>Pokemon favorito: {user.favoritePokemon}</p>
                </div>
            )}
        </form>
    );
}

export default RegistrationForm;
