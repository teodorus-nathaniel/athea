import { importAll } from '#/helpers/batch-import'
import { ClientData } from './types'

const clientImages = importAll<any>(
  require.context('../assets/clients', false, /.svg$/)
)

const clients: ClientData[] = Array.from({ length: 15 }).map((_, idx) => ({
  image: clientImages[`client-${idx + 1}.svg`],
}))
export default clients
