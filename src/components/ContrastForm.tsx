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
        setColorValues((prevCamps) => ({ ...prevCamps, [name]: value }));
    }

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
                    onChange={handleInput}
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





