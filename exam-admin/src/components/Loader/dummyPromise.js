const dummyPromise = (sec=5) => {
  const promise = new Promise((resolve, reject) => {
    console.log(`Dummy Promise Started & Resloved in ${sec}sec...`)
    setTimeout(() => {
      resolve(
          console.log("Dummy Promise Resolved!!!")
      );
    }, sec * 1000);
  });
  return promise;
};

export default dummyPromise