

type AccessibilityExampleProps = {
    text: string;
    background: string;
}



export const AccessibilityExample = ({
    text,
    background,
}:AccessibilityExampleProps ) => {

     return (
        <section style={{backgroundColor: background, color: text}} className="rounded-2xl flex flex-col item-center justify-center p-8 text-center border">
            <h3 className="text-3xl">VAMO BELGRANO</h3>
            <p>T*lleres hijo de puta, esos colores se parecen a la yuta</p>
        </section>
     )
    }