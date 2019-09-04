export const errorLogging = err => {
  console.log(err)
  if (process.env.REACT_APP_GLOBAL_DEBUG) console.log(err)
}