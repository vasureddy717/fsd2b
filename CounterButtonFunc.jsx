function CounterButtonFunc() {
    const [count, setCount] = React.useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}
