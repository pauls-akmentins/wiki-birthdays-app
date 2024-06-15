export function classNames(
  mandatoryClasses: string[],
  conditionalClasses: { [key: string]: boolean } = {},
) {
  const includedConditionalClasses = Object.keys(conditionalClasses)
    .filter((key) => conditionalClasses[key])
    .join(' ');

  return [...mandatoryClasses, includedConditionalClasses].filter(Boolean).join(' ');
}
