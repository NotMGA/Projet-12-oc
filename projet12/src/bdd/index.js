export class Services {
  // Use to get the information for : name , %done , stats
  async getGeneralInfoById(id) {
    const _data = await fetch(`http://localhost:3000/user/${id}`).then((res) =>
      res.json()
    )
    return _data.data
  }

  async getActivityById(id) {
    // Use to get information for the activity graph
    const _data = await fetch(`http://localhost:3000/user/${id}/activity`).then(
      (res) => res.json()
    )
    return _data.data
  }
  async getSessionById(id) {
    // use to get information for avrage session graph
    const _data = await fetch(
      `http://localhost:3000/user/${id}/average-sessions`
    ).then((res) => res.json())
    return _data.data
  }
  async getPerformanceById(id) {
    // use to get information  for courbe_session graph
    const int = parseInt(id)
    const _data = await fetch(
      `http://localhost:3000/user/${int}/performance`
    ).then((res) => res.json())
    return _data.data
  }
}
