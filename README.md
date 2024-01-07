# Tic-Tac-Toe

- Setup
- npx create-react-app react-typescript --template typescript
- Tailwind Setup

- Board Component
- Board components consists of 9 blocks.
- It can be represented as an array which initially contains 9 null values.

Array[null,null,null,null,null,null,null,null,null]
index: 0 1 2 3 4 5 6 7 8

Array will look like this:

                  0 1 2
                  3 4 5
                  6 7 8

- Each block has been assigned an index no.
- Props has been assigned to each block which will give value and onClick function.

- First of all we will provide value to the block, state[0]...state[8]

- Then we will provide event listener to each block to know whose turn it was, whether of X or O. According to the turn we will render that particular item.

- Create state for that: currentTurn
