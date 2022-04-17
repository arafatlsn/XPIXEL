const { useState, useEffect } = require("react")

const usePlans = () => {
  const [allPlans, setPlans] = useState([]);
  useEffect(() => {
    fetch('generated (2).json')
    .then(res => res.json())
    .then(data => setPlans(data))
  }, [])
  return { allPlans, setPlans }
}


export default usePlans