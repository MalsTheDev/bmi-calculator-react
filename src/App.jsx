import React, { useEffect, useState } from 'react'
import BmiImage from './assets/bmi.png'

function App() {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('male')
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [metricType, setMetricType] = useState('usc');
  const [currentBmi, setCurrentBmi] = useState(0);
  const [currentClass, setCurrentClass] = useState('')

  const calculateBmi = () => {
    if(metricType === 'usc') {
      setCurrentBmi(
        703 * (weight / (height**2))
      )
    } else if(metricType == 'si') {
      setCurrentBmi(
        weight / ((height / 100)**2)
      )
    }
  }

  const calculateChildClass = () => {
    if(age == 2) {
      if(currentBmi < 14.73732) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 18.16219	) {
         setCurrentClass('Normal')
      } else if(currentBmi < 19.33801	) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 3) {
      if(currentBmi < 14.35767) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 17.37639) {
         setCurrentClass('Normal')
      } else if(currentBmi < 18.29895) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 4) {
      if(currentBmi < 14.05366) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 16.94533) {
         setCurrentClass('Normal')
      } else if(currentBmi < 17.8485) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 5) {
      if(currentBmi < 13.85108) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 16.83729) {
         setCurrentClass('Normal')
      } else if(currentBmi < 17.9144) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 6) {
      if(currentBmi < 13.74144) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 16.99096) {
         setCurrentClass('Normal')
      } else if(currentBmi < 18.36325) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 7) {
      if(currentBmi < 13.71901) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 17.36192) {
         setCurrentClass('Normal')
      } else if(currentBmi < 19.083) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 8) {
      if(currentBmi < 13.78603) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 17.90429) {
         setCurrentClass('Normal')
      } else if(currentBmi < 19.98668) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 9) {
      if(currentBmi < 13.94476) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 18.57222) {
         setCurrentClass('Normal')
      } else if(currentBmi < 21.00138) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 10) {
      if(currentBmi < 14.19394) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 19.32497) {
         setCurrentClass('Normal')
      } else if(currentBmi < 22.06494) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 11) {
      if(currentBmi < 14.52852) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 20.12835) {
         setCurrentClass('Normal')
      } else if(currentBmi < 23.12651) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 12) {
      if(currentBmi < 14.94002) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 20.95468) {
         setCurrentClass('Normal')
      } else if(currentBmi < 24.1475) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 13) {
      if(currentBmi < 15.41692) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 21.78252) {
         setCurrentClass('Normal')
      } else if(currentBmi < 25.10206) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 14) {
      if(currentBmi < 15.94486) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 22.5964) {
         setCurrentClass('Normal')
      } else if(currentBmi < 25.97734) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 15) {
      if(currentBmi < 16.507) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 23.38657) {
         setCurrentClass('Normal')
      } else if(currentBmi < 26.77374) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 16) {
      if(currentBmi < 17.08434) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 24.14864) {
         setCurrentClass('Normal')
      } else if(currentBmi < 27.50514) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 17) {
      if(currentBmi < 17.65613) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 24.88346) {
         setCurrentClass('Normal')
      } else if(currentBmi < 28.19937) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 18) {
      if(currentBmi < 18.20014) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 25.59716) {
         setCurrentClass('Normal')
      } else if(currentBmi < 28.89848) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 19) {
      if(currentBmi < 18.69233) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 26.30171) {
         setCurrentClass('Normal')
      } else if(currentBmi < 29.65857) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } else if(age == 20) {
      if(currentBmi < 19.10551) {
         setCurrentClass('Underweight')
      } else if(currentBmi < 27.01575) {
         setCurrentClass('Normal')
      } else if(currentBmi < 30.54859) {
         setCurrentClass('Overweight')
      } else {
         setCurrentClass('Obesse')
      }
    } 
  }
  
  const calculateClass = () => {
    if(currentBmi <= 16) {
      setCurrentClass('Severe Thinness')
    } else if(currentBmi <= 17) {
      setCurrentClass('Moderate Thinness')
    } else if(currentBmi <= 18.5) {
        setCurrentClass('Mild Thinness')
    } else if(currentBmi <= 25) {
      setCurrentClass('Normal')
    } else if(currentBmi <= 30) {
      setCurrentClass('Overweight')
    } else if(currentBmi <= 35) {
      setCurrentClass('Obesse Class I')
    } else if(currentBmi <= 40) {
      setCurrentClass('Obesse Class II') 
    } else {
      setCurrentClass('Obesse III')
    }
  }

  useEffect(() => {
   if(weight && height)
    calculateBmi();
  }, [weight, height, metricType])

  useEffect(() => {
   if(weight && height) {
      if(age > 20) {
        calculateClass();
      } else {
        calculateChildClass();
      }
   }
  }, [currentBmi, age])

  return (
    <div className='min-h-screen w-screen flex items-center flex-col'>
      <h1 className='text-center text-blue-400 m-3 text-2xl font-bold'>BMI Calculator</h1>
      <div className='flex flex-col items-center justify-between rounded-xl m-12 bg-gradient-to-tr from-blue-500 to-sky-500 px-5 pb-5'>
        <div className='flex items-center w-full justify-around bg-blue-600 mb-5 rounded-b-xl'>
          <button className={`uppercase font-bold ${metricType === 'usc' ? 'bg-white text-blue-600' : 'text-white'} p-2 text-lg h-full w-full border-r-2 border-neutral-100 rounded-bl-xl`} onClick={() => setMetricType('usc')}>USC Units</button>
          <button className={`uppercase font-bold ${metricType === 'si' ? 'bg-white text-blue-600'  : 'text-white'} p-2 text-lg h-full w-full rounded-br-xl`} onClick={() => setMetricType('si')}>Metric Units</button>
        </div>
        <div className='flex-col flex space-y-5'>
          <div className="group relative w-72 md:w-80 lg:w-96">
            <label htmlFor="1" className="block w-full pb-1 text-sm font-medium text-white transition-all duration-200 ease-in-out group-focus-within:text-blue-100">Age</label>
            <input id="1" type="number" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-100" onChange={(e) => setAge(e.target.value)} />
          </div>
          {/* Gender input */}
          <form className='flex items-center text-white'>
            <h1>Gender:</h1>
            <div className="flex items-center">
              <label>
                <input type="radio" value="male" checked={gender == 'male' ? true : false} onChange={(e) => setGender(e.target.value)} className='mx-2' />
                Male
              </label>
            </div>
            <div className="flex items-center">
              <label>
                <input type="radio" value="female" className='mx-2'checked={gender == 'female' ? true : false} onChange={(e) => setGender(e.target.value)} />
                Female
              </label>
            </div>
          </form>
          {/* Height input */}
          <div className="group">
            <label htmlFor="4" className="inline-block my-1 w-full text-sm font-medium text-white transition-all duration-200 ease-in-out group-focus-within:text-blue-100">Height</label>
            <div className="relative flex items-center">
              <input id="4" type="number" className="peer relative h-10 w-full rounded-md bg-gray-50 pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-100 focus:drop-shadow-lg" onChange={(e) => setHeight(e.target.value)} />
              { metricType === 'usc' ?
                <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">in.</span>
                :
                <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">cm</span>
              }
            </div>
          </div>
          <div className="group">
            <label htmlFor="4" className="inline-block my-1 w-full text-sm font-medium text-white transition-all duration-200 ease-in-out group-focus-within:text-blue-100">Weight</label>
            <div className="relative flex items-center">
              <input id="4" type="number" className="peer relative h-10 w-full rounded-md bg-gray-50 pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-100 focus:drop-shadow-lg" onChange={(e) => setWeight(e.target.value)} />
              { metricType === 'usc' ?
                <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">lbs</span>
                : 
                <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">kg</span>
              }
            </div>
          </div>
        </div>
      </div>
      <div className='border-2 p-5 rounded-xl border-neutral-600 mb-50 transition-all mb-5 flex flex-col justify-between'>
        <div>
          <h1>Your BMI is: {currentBmi ? currentBmi.toFixed(2) : ''}</h1>
          <h1 className='text-2xl font-bold'>Classification: {currentClass}</h1>
        </div>
        <div>
            <div className='flex items-center justify-between'>
              <h1>0</h1>
              <h1>40</h1>
            </div>
              <div className='h-12 rounded-t-xl bg-gray-400 w-full xl:w-96'>
                <div className='transition-all' style={{
                  height: '100%',
                  width: `${currentBmi.toFixed(2) * 2.5}%`,
                  backgroundColor: 'rgb(37, 99, 235)',
                  borderRadius: '0.75rem 0.75rem 0 0',
                }}></div>
              </div>
              <div className={`flex rounded-b-xl`}>
                <h1 className='w-[46.25%] bg-blue-500 flex items-center justify-center text-center text-sm text-white rounded-bl-xl'>{age > 20 ? 'Underweight' : '0-18.5'}</h1>
                <h1 className='w-[16.25%] bg-blue-400 flex items-center justify-center text-center text-sm text-white'>{age > 20 ? 'Normal' : '18.5-25'}</h1>
                <h1 className='w-[12.50%] p-2 bg-blue-700 flex items-center justify-center text-center text-sm text-white text-clip'>{age > 20 ? 'Over Weight' : '25 -30'}</h1>
                <h1 className='w-[25%] bg-blue-900 flex items-center justify-center text-center text-sm text-white text-clip rounded-br-xl'>{age > 20 ? 'Obesse' : '30-40'}</h1>
              </div>
        </div>
         <p className='text-gray-600 mt-2'>Note: BMI for ages below 20 is less accurate</p>
      </div>
      
      <div className='my-12 w-full p-4 md:w-1/2 space-y-6'>
         <div>
            <h1 className='text-2xl font-bold text-blue-500 '>What is BMI?</h1>
            <p className=''>
               BMI, or Body Mass Index, is a numerical value derived from a person's weight and height. It is a simple and widely used measure to assess whether an individual has a healthy body weight relative to their height. The formula for BMI is weight in kilograms divided by the square of height in meters (BMI = kg/m²). 
               <br />
               <br />
               BMI is often categorized into ranges such as underweight, normal weight, overweight, and obese, providing a general indication of a person's health status. However, it's important to note that BMI does not directly measure body fat percentage or distribution, nor does it consider factors such as muscle mass, bone density, or overall body composition. Therefore, while it can be a useful screening tool, it may not always accurately reflect an individual's level of health or risk for certain diseases. Consulting with a healthcare professional is recommended for a comprehensive assessment of health and weight status.
            </p>
            <img src={BmiImage} alt="" />
         </div>
         <div>
            <h1 className='text-2xl font-bold text-blue-500 '>How to calculate BMI?</h1>
            
            <p>
               The BMI is calculated by dividing an adult's weight in kilograms by their height in metres squared. For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 foot 8 inches) tall, you work out your BMI by: squaring your height in metres: 1.73 x 1.73 = 2.99.     
            </p>
         </div>
      </div>
      <div className='py-5 flex items-center'>
         <h1 className='text-xl font-semibold'>Made by <a href="https://malsthedev.vercel.app" className='text-blue-400 underline'>Mals</a></h1>
      </div>
    </div>
  )
}

export default App