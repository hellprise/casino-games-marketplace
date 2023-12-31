// your Stage:
import { Stage as PixiStage } from '@pixi/react'
import { ReactReduxContext } from 'react-redux'

// the context bridge:
const ContextBridge = ({ children, Context, render }: any) => {
	return (
		<Context.Consumer>
			{(value: any) => render(<Context.Provider value={value}>{children}</Context.Provider>)}
		</Context.Consumer>
	)
}

export const Stage = ({ children, ...props }: any) => {
	return (
		<ContextBridge Context={ReactReduxContext} render={(children: any) => <PixiStage {...props}>{children}</PixiStage>}>
			{children}
		</ContextBridge>
	)
}
