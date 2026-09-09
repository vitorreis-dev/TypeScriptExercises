type OutputProps = {
    r: number,
    g: number,
    b: number
}

export default function Output(props: OutputProps) {

    const rgb = `rgb(${props.r},${props.g},${props.b})`;

    return (
        <article className="colorOutput-article" style={{ backgroundColor: rgb }}>
            <p>RGB({props.r},{props.g},{props.b})</p>
        </article>
    )
}