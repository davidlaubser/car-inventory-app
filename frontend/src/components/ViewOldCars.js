import React, { useState, useEffect } from 'react';
import { Table, Alert, Container } from 'react-bootstrap';
import axios from 'axios';

function ViewOldCars() {
    const [cars, setCars] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOldCars = async () => {
            try {
                const response = await axios.get('http://localhost:5003/api/cars/old');
                setCars(response.data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchOldCars();
    }, []);

    return (
        <Container className="my-component-wrapper">
            <h2 className="component-title">Old Cars (Older than 5 years)</h2>
            {error && <Alert variant="danger">{`Error fetching old cars: ${error}`}</Alert>}
            <Table striped bordered hover responsive>
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Model</th>
                        <th>Make</th>
                        <th>Year</th>
                        <th>Registration</th>
                        <th>Owner</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map((car) => (
                        <tr key={car._id}>
                            <td>{car._id}</td>
                            <td>{car.model}</td>
                            <td>{car.make}</td>
                            <td>{car.year}</td>
                            <td>{car.registration}</td>
                            <td>{car.owner}</td>
                            <td>{car.address}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default ViewOldCars;
