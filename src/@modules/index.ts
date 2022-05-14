import { MapModule } from './map.module'
import { NothingFoundModule } from './404.module'
import { AboutModule } from './about.module'
import {ControlModule} from './control.module'
import {AuthModule} from './auth.module'
import {FeedbackFormModule} from './feedbackform.module'
import {RecommendModule} from './recommend.module'
import {ContractorsModule} from './contractors.module'

export const CommonModules = [
	AboutModule,
	NothingFoundModule,
	MapModule,
	RecommendModule,
	ControlModule,
	AuthModule,
	FeedbackFormModule,
	ContractorsModule
]