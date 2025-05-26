import vinilo from '../../assets/vinilo.svg'

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={vinilo} alt="Cargando..." />
    </div>
  )
}

export default Spinner