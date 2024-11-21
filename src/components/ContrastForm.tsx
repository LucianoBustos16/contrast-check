import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dispatch, SetStateAction } from "react"

type ColorValues = {
    text: string;
    background: string;
}

type ColorOptionsProps = {
    colorValues: ColorValues;
    setColorValues: Dispatch<SetStateAction<ColorValues>>;
    contrast: number;
}


export const ContrastForm = ({
    colorValues,
    setColorValues,
    contrast,
}: ColorOptionsProps ) => {


    const handleInput = (event: { target: { name: string; value: string } }) => {
        const { name, value } = event.target;
    
        // Si el valor no comienza con '#', lo agregamos
        const correctedValue = value.startsWith("#") ? value : `#${value}`;
    
        // Limitamos el valor a 7 caracteres (# + 6 dígitos hexadecimales)
        const validatedValue = correctedValue.slice(0, 7);
    
        // Actualizamos el estado inmediatamente
        setColorValues((prevCamps) => ({
            ...prevCamps,
            [name]: validatedValue,
        }));
    };
    
    const handleBlur = (event: { target: { name: string; value: string } }) => {
        const { name, value } = event.target;
    
        // Si el valor no comienza con '#', lo agregamos
        const correctedValue = value.startsWith("#") ? value : `#${value}`;
    
        // Detectar si el valor después del '#' tiene solo 3 caracteres
        const colorCode = correctedValue.slice(1); // Quitamos el '#' para procesarlo
        const expandedValue =
            colorCode.length === 3
                ? colorCode.split("").map((char) => char + char).join("") // Duplicar cada carácter
                : colorCode;
    
        // Limitamos el valor a 6 caracteres y añadimos '#'
        const validatedValue = `#${expandedValue.slice(0, 6)}`;
    
        // Actualizamos el estado solo al salir del input
        setColorValues((prevCamps) => ({
            ...prevCamps,
            [name]: validatedValue,
        }));
    };

    return (
        <article className="flex gap-8 flex-col md:flex-row items-center md:items-end">

            <section className="grid w-full max-w-sm gap-1.5">
                <Label htmlFor="text-color" className="text-left">Text Color</Label>
                <div className="relative">
                <Input type="color" 
                    defaultValue="#ffffff"
                    className="border-none shadow-none absolute w-16 right-0"
                    name="text"
                    value={colorValues.text}
                    onChange={handleInput}
                    />
                <Input
                    id="text-color"
                    type="text"
                    className="pr-16"
                    placeholder="#FFFFFF"
                    name="text"
                    defaultValue="#ffffff"
                    value={colorValues.text}
                    onChange={handleInput} // Cambios inmediatos
                    onBlur={handleBlur} // Validación al salir del campo
                    />
                </div>
            </section>

            <section className="grid w-full max-w-sm gap-1.5">
                <Label htmlFor="background-color" className="text-left">Background Color</Label>
                <div className="relative">
                <Input
                    type="color"
                    defaultValue="#000000"
                    className="border-none shadow-none absolute w-16 right-0"
                    name="background"
                    value={colorValues.background}
                    onChange={handleInput}
                    />
                <Input
                    id="background-color"
                    type="text"
                    className="pr-16"
                    placeholder="#000000"
                    name="background"
                    defaultValue="#000000"
                    value={colorValues.background}
                    onChange={handleInput}
                    />
                </div>
            </section>

            <section className="flex flex-col">
                <p>Contrast <span className="font-bold text-3xl">{contrast.toFixed(2)}</span></p>
            </section>
        </article>
    )
}





