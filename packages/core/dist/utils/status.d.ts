import { State } from '../types/common.js';
import { l as WalletStatus } from '../chain-932d9904.js';
import '@chain-registry/types';
import '@cosmjs/cosmwasm-stargate';
import '@cosmjs/stargate';
import '@cosmjs/amino';
import '@cosmjs/proto-signing';
import '@walletconnect/types';
import 'cosmjs-types/cosmos/tx/v1beta1/tx';
import './logger.js';
import 'events';

declare const getWalletStatusFromState: (state: State, message?: string) => WalletStatus;

export { getWalletStatusFromState };
