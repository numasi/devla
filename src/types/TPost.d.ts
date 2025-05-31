export default interface TPost {
    blog: string
    comment: {
      active_votes: {
        percent: number
        reputation: number
        rshares: number
        voter: string
      }[]
      author: string
      author_reputation: number
      beneficiaries: {
        account: string
        weight: number
      }[]
      body: string
      body_length: number
      cashout_time: string
      category: string
      children: number
      created: string
      curator_payout_value: string
      depth: number
      json_metadata: string
      last_payout: string
      last_update: string
      max_accepted_payout: string
      net_rshares: number
      parent_author: string
      parent_permlink: string
      pending_payout_value: string
      percent_hbd: number
      permlink: string
      post_id: number
      promoted: string
      replies: []
      root_title: string
      title: string
      total_payout_value: string
      url: string
    }
    entry_id: number
    reblogged_on: string
  }