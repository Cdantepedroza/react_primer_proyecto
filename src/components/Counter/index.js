const Counter = (props) => {
    const{contador, incrementar, decrementar} = props;
  return (
    <div>
      <h1>Contador: {contador}</h1>
      {/* 2 botones uno para sumar y otro para restar */}
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>

    </div>
  );
};

export default Counter;

//* const props = {
//*     nombre: "Pepe",
//*     apellido: "Perez",
//*     edad: 22,
//*   };
//*   
//*   const { nombre, apellido, edad } = props;
//*   
//*   console.log(nombre);