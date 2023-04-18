export default function getSanFranciscoDescription() {
    const year = 2017;
    const budget = {
      income: '$119,868',
      gdp: '$154.2 billion',
      capita: '$178,479',
    };
  
    return `As of ${year}, the average income in San Francisco is ${budget.income}, the GDP is ${budget.gdp}, and the capita is ${budget.capita}.`;
  }