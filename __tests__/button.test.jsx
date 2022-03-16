import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@/components/shared/Button.js';

describe('Button Component', () => {
  it('renders a text', () => {
    const text = "test 1";
    render(<Button text={text} />)
    const content = screen.getByText(text);
    expect(content).toHaveTextContent(text);
  });

  it('fire on click event', () => {
    const onClick = jest.fn();
    const text = "test 2";
    const { getByText } = render(<Button text={text} onClick={onClick}/>)
    fireEvent.click(getByText(text));
    expect(onClick).toHaveBeenCalled();
  });
});
