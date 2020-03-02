import { GetSelect, GetEsbServer, GetOutPutNode, GetMonitoringRoute, GetDataSources, GetPushSources, GetPushService, GetDataTables, GetProjects } from '@/api/select'
const state = {
  ReportOrgan: [],
  DataSources: [],
  DataType: [],
  Period: [],
  ContentType: [],
  EsbServer: [],
  ControlType: [],
  PushService: [],
  OutPutType: [],
  ReadType: [],
  AuditState: [],
  FillStyle: [],
  Projects: [],
  HospitalSystem: [],
  DataItems: [],
  SystemConfig: [],
  DataSourcesType: [],
  DataBaseType: [],
  MonitoringRoute: []
}

const mutations = {
  SET_SELECT: (state, { DictCode, res }) => {
    state[DictCode] = res
  }
}
// 数据会缓存到vuex
const actions = {
  // 公共字典获取方法
  async GetSelect({ commit, state }, DictCode) {
    return new Promise(async (resolve) => {
      if (state[DictCode] && state[DictCode].length === 0) {
        const res = await GetSelect({ DictCode })
        commit('SET_SELECT', { DictCode, res })
      }

      resolve(state[DictCode])
    })
  },
  // 特殊字典获取方法
  async GetEsbServer({ commit, state }, DictCode = 'EsbServer') {
    return new Promise(async (resolve) => {
      if (state.EsbServer.length === 0) {
        const res = await GetEsbServer()
        commit('SET_SELECT', { DictCode, res })
      }
      resolve(state.EsbServer)
    })
  },

  async GetProjects({ commit, state }, params = { Type: '1' }) {
    return new Promise(async (resolve) => {
      const res = await GetProjects(params)
      resolve(res)
    })
  },

  async GetDataSources({ commit, state }, DictCode = 'DataSources') {
    return new Promise(async (resolve) => {
      if (state[DictCode].length === 0) {
        const res = await GetDataSources()
        commit('SET_SELECT', { DictCode, res })
      }
      resolve(state[DictCode])
    })
  },

  async GetPushSources({ commit, state }, data) {
    return new Promise(async (resolve) => {
      const res = await GetPushSources(data)
      resolve(res)
    })
  },

  async GetMonitoringRoute({ commit, state }, data, DictCode = 'MonitoringRoute') {
    return new Promise(async (resolve) => {
      if (state[DictCode].length === 0) {
        const res = await GetMonitoringRoute(data)
        commit('SET_SELECT', { DictCode, res })
      }
      resolve(state[DictCode])
    })
  },

  async GetPushService({ commit, state }, data, DictCode = 'PushService') {
    return new Promise(async (resolve) => {
      if (state[DictCode].length === 0) {
        const res = await GetPushService(data)
        commit('SET_SELECT', { DictCode, res })
      }
      resolve(state[DictCode])
    })
  },

  // 数据不会缓存到vuex
  async GetOutPutNode({ commit, state }, data) {
    return new Promise(async (resolve) => {
      const res = await GetOutPutNode(data)
      resolve(res)
    })
  },

  async GetDataTables({ commit, state }, data) {
    return new Promise(async (resolve) => {
      const res = await GetDataTables(data)
      resolve(res)
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

