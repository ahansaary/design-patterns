function Process(state) {
  this.state = state
}

const Singleton = (function () {
  function ProcessManager() {
    this.numberOfProcesses = 0
  }

  //   // ** Sinle Instance **
  let processManager

  function createProcessManager() {
    processManager = new ProcessManager()
    return processManager
  }

  return {
    getProcessManager: () => {
      // create a new instance if no instance exists
      if (!processManager) processManager = createProcessManager()
      return processManager
    }
  }
})()

// will alwayes return the same instance
const processManager = Singleton.getProcessManager()
const processManager2 = Singleton.getProcessManager()

console.log(processManager === processManager2)
