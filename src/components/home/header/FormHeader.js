import React from 'react';

import { Form, 
        Countryside, 
        Label, 
        Input, 
        Button 
} from '../../styles/formHeader/FormStyled';

export const FormHeader = () => {
    return (
        <Form>
            <Countryside>
                <Label htmlFor="ubicacion"> Location </Label>
                <Input 
                    type="text" 
                    id="ubicacion" 
                    placeholder="¿A donde viajas?" 
                />
            </Countryside>

            <Countryside>
                <Label htmlFor="llegada"> Arrival </Label>
                <Input 
                    type="date" 
                    id="llegada"
                />
            </Countryside>

            <Countryside>
                <Label htmlFor="salida"> Departure </Label>
                <Input 
                    type="date" 
                    id="salida" 
                />
            </Countryside>

            <Countryside>
                <Label htmlFor="huespedes"> Guests </Label>
                <Input 
                    type="number" 
                    id="huespedes" 
                    placeholder="¿Cuantos?" 
                />
            </Countryside>

            <Countryside>
                <Button
                    type="submit" 
                > 
                    <a
                        href="!#"
                    >
                        <i className="fas fa-search"></i>
                    </a>
                </Button>
            </Countryside>
        </Form>
    );
};
