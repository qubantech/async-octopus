import { MapModule } from './map.module'
import { NothingFoundModule } from './404.module'
import { AboutModule } from './about.module'
import {ControlModule} from './control.module'
import {AuthModule} from './auth.module'
import {FeedbackFormModule} from './feedbackform.module'

export const CommonModules = [
	AboutModule,
	NothingFoundModule,
	MapModule,
	ControlModule,
	AuthModule,
	FeedbackFormModule
]