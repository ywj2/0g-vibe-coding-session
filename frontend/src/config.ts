import { createConfig, http } from 'wagmi'
import { zeroGTestnet } from 'wagmi/chains'

export const config = createConfig({
  chains: [zeroGTestnet],
  transports: {
    [zeroGTestnet.id]: http(),
  },
})