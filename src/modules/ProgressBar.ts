/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import { IProgressBar } from '../types';
import { Component } from './Component';
import { Dom } from './Dom';

export class ProgressBar extends Component implements IProgressBar {
	/**
	 * progress_bar Progress bar
	 */
	private progressBar = this.jodit.create.div(
		'jodit_progressbar',
		this.jodit.create.div()
	);

	show(): IProgressBar {
		this.jodit.workplace.appendChild(this.progressBar);
		return this;
	}

	hide(): IProgressBar {
		Dom.safeRemove(this.progressBar);
		return this;
	}

	progress(percentage: number): IProgressBar {
		this.progressBar.style.width = percentage.toFixed(2) + '%';
		return this;
	}

	destruct(): any {
		this.hide();
		return super.destruct();
	}
}
