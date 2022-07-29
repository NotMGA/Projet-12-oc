// import React, { Component, useCallback, useEffect, useState } from 'react'
// class Bdd extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       items: [],
//     }
//     console.log('miaou')
//   }

//   componentDidMount() {
//     const fetchData = async () => {
//       const response = await fetch('http://localhost:3000/user/18')
//       const jsonresponse = await response.json()
//       if (jsonresponse && jsonresponse.items) {
//         this.setState({ items: jsonresponse?.data })
//       }
//     }
//     console.log('miaou')
//     fetchData()
//   }
//   render() {
//     const { items } = this.state
//     console.log('miaou')
//     return items
//   }
// }
// export default { Bdd }

// 'http://localhost:3000/user/${id}'

// export function Bdd() {
//   const [data, setdata] = useState({
//     data: {
//       id: 12,
//       userInfos: {
//         firstName: 'Karl',
//         lastName: 'Dovineau',
//         age: 31,
//       },
//       todayScore: 0.12,
//       keyData: {
//         calorieCount: 1930,
//         proteinCount: 155,
//         carbohydrateCount: 290,
//         lipidCount: 50,
//       },
//     },
//   })

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch('http://localhost:3000/user/18')
//       const json = await data.json()

//       setdata(json)
//     }

//     fetchData().catch(console.error)
//   }, [])
//   console.log(data)
//   return data
// }

// export function Bdd_perf() {
//   const [data, setdata] = useState({
//     data: {
//       userId: 12,
//       kind: {
//         1: 'cardio',
//         2: 'energy',
//         3: 'endurance',
//         4: 'strength',
//         5: 'speed',
//         6: 'intensity',
//       },
//       data: [
//         {
//           value: 80,
//           kind: 1,
//         },
//         {
//           value: 120,
//           kind: 2,
//         },
//         {
//           value: 140,
//           kind: 3,
//         },
//         {
//           value: 50,
//           kind: 4,
//         },
//         {
//           value: 200,
//           kind: 5,
//         },
//         {
//           value: 90,
//           kind: 6,
//         },
//       ],
//     },
//   })

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch('http://localhost:3000/user/18/performance')
//       const json = await data.json()

//       setdata(json)
//     }

//     fetchData().catch(console.error)
//   }, [])
//   console.log(data)
//   return data
// }

export class Services {
  async getGeneralInfoById(id) {
    const _data = await fetch(`http://localhost:3000/user/${id}`).then((res) =>
      res.json()
    )
    // console.dir(_data.data)
    return _data.data
  }

  async getActivityById(id) {
    const _data = await fetch(`http://localhost:3000/user/${id}/activity`).then(
      (res) => res.json()
    )
    // console.dir(_data.data)
    return _data.data
  }
  async getSessionById(id) {
    const _data = await fetch(
      `http://localhost:3000/user/${id}/average-sessions`
    ).then((res) => res.json())
    // console.dir(_data.data)
    return _data.data
  }
  async getPerformanceById(id) {
    const int = parseInt(id)
    const _data = await fetch(
      `http://localhost:3000/user/${int}/performance`
    ).then((res) => res.json())
    // console.dir(_data.data)
    return _data.data
  }
}
