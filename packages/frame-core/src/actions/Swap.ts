export type SwapOptions = {
  /**
   * CAIP-19 asset ID
   * For example, Base USDC:
   * eip155:8453/erc20:0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913
   */
  sellToken?: string

  /**
   * CAIP-19 token ID. For example, OP ETH:
   * eip155:10/native
   */
  buyToken?: string

  /**
   * Sell token amount, as numeric string.
   * For example, 10 USDC: 1000000
   */
  sellAmount?: string
}

type SwapDetails = {
  /**
   * Array of tx identifiers in order of execution.
   * Some swaps will have both an approval and swap tx.
   */
  transactions: `0x${string}`[]
}

type SwapErrorDetails = {
  /**
   * Error code.
   */
  error: string
  /**
   * Error message.
   */
  message?: string
}

export type SwapErrorReason = 'rejected_by_user' | 'swap_failed'

export type SwapResult =
  | {
      success: true
      swap: SwapDetails
    }
  | {
      success: false
      reason: SwapErrorReason
      error?: SwapErrorDetails
    }

export type Swap = (options: SwapOptions) => Promise<SwapResult>
