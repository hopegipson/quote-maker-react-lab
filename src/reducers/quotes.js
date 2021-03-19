export default function quotes(state = [], action) {
  let idx;
switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

      case "UPVOTE_QUOTE":
        return state.map(quote => {
          if (quote.id === action.quoteId) {
            return {
              ...quote,
              votes: quote.votes + 1
            }
          } else {
            return quote
          }
        })

        case "DOWNVOTE_QUOTE":
          return state.map(quote => {
            if (quote.id === action.quoteId && quote.votes != 0) {
              return {
                ...quote,
                votes: quote.votes - 1
              }
            } else {
              return quote
            }
          })

        
      // let existingQuote = state.filter(
      //   quote => quote.id === action.quoteId
      // );

      // if (existingQuote.length > 0) {
      //   console.log(existingQuote[0].votes)
      //  let newVotes = existingQuote[0].votes + 1
      //   return [...state, {content: existingQuote[0].content, author: existingQuote[0].content, id: existingQuote[0].id, votes: newVotes}];
      // }

    default:
      return state;
  }
}
