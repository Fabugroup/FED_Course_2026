import StudentCard from './components/StudentCard'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <StudentCard
        name="Johnny Chua"
        course="Frontend Web Development"
        email="[EMAIL_ADDRESS]"
      />
    </div>
  )
}

export default App