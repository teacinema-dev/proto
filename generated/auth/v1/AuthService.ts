// Original file: src/auth/v1/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { IntrospectRequest as _auth_v1_IntrospectRequest, IntrospectRequest__Output as _auth_v1_IntrospectRequest__Output } from '../../auth/v1/IntrospectRequest';
import type { IntrospectResponse as _auth_v1_IntrospectResponse, IntrospectResponse__Output as _auth_v1_IntrospectResponse__Output } from '../../auth/v1/IntrospectResponse';
import type { PhoneSendCodeRequest as _auth_v1_PhoneSendCodeRequest, PhoneSendCodeRequest__Output as _auth_v1_PhoneSendCodeRequest__Output } from '../../auth/v1/PhoneSendCodeRequest';
import type { PhoneSendCodeResponse as _auth_v1_PhoneSendCodeResponse, PhoneSendCodeResponse__Output as _auth_v1_PhoneSendCodeResponse__Output } from '../../auth/v1/PhoneSendCodeResponse';
import type { PhoneVerifyCodeRequest as _auth_v1_PhoneVerifyCodeRequest, PhoneVerifyCodeRequest__Output as _auth_v1_PhoneVerifyCodeRequest__Output } from '../../auth/v1/PhoneVerifyCodeRequest';
import type { PhoneVerifyCodeResponse as _auth_v1_PhoneVerifyCodeResponse, PhoneVerifyCodeResponse__Output as _auth_v1_PhoneVerifyCodeResponse__Output } from '../../auth/v1/PhoneVerifyCodeResponse';

export interface AuthServiceClient extends grpc.Client {
  Introspect(argument: _auth_v1_IntrospectRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_v1_IntrospectResponse__Output>): grpc.ClientUnaryCall;
  Introspect(argument: _auth_v1_IntrospectRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_v1_IntrospectResponse__Output>): grpc.ClientUnaryCall;
  Introspect(argument: _auth_v1_IntrospectRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_v1_IntrospectResponse__Output>): grpc.ClientUnaryCall;
  Introspect(argument: _auth_v1_IntrospectRequest, callback: grpc.requestCallback<_auth_v1_IntrospectResponse__Output>): grpc.ClientUnaryCall;
  introspect(argument: _auth_v1_IntrospectRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_v1_IntrospectResponse__Output>): grpc.ClientUnaryCall;
  introspect(argument: _auth_v1_IntrospectRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_v1_IntrospectResponse__Output>): grpc.ClientUnaryCall;
  introspect(argument: _auth_v1_IntrospectRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_v1_IntrospectResponse__Output>): grpc.ClientUnaryCall;
  introspect(argument: _auth_v1_IntrospectRequest, callback: grpc.requestCallback<_auth_v1_IntrospectResponse__Output>): grpc.ClientUnaryCall;
  
  PhoneSendCode(argument: _auth_v1_PhoneSendCodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_v1_PhoneSendCodeResponse__Output>): grpc.ClientUnaryCall;
  PhoneSendCode(argument: _auth_v1_PhoneSendCodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_v1_PhoneSendCodeResponse__Output>): grpc.ClientUnaryCall;
  PhoneSendCode(argument: _auth_v1_PhoneSendCodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_v1_PhoneSendCodeResponse__Output>): grpc.ClientUnaryCall;
  PhoneSendCode(argument: _auth_v1_PhoneSendCodeRequest, callback: grpc.requestCallback<_auth_v1_PhoneSendCodeResponse__Output>): grpc.ClientUnaryCall;
  phoneSendCode(argument: _auth_v1_PhoneSendCodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_v1_PhoneSendCodeResponse__Output>): grpc.ClientUnaryCall;
  phoneSendCode(argument: _auth_v1_PhoneSendCodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_v1_PhoneSendCodeResponse__Output>): grpc.ClientUnaryCall;
  phoneSendCode(argument: _auth_v1_PhoneSendCodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_v1_PhoneSendCodeResponse__Output>): grpc.ClientUnaryCall;
  phoneSendCode(argument: _auth_v1_PhoneSendCodeRequest, callback: grpc.requestCallback<_auth_v1_PhoneSendCodeResponse__Output>): grpc.ClientUnaryCall;
  
  PhoneVerifyCode(argument: _auth_v1_PhoneVerifyCodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_v1_PhoneVerifyCodeResponse__Output>): grpc.ClientUnaryCall;
  PhoneVerifyCode(argument: _auth_v1_PhoneVerifyCodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_v1_PhoneVerifyCodeResponse__Output>): grpc.ClientUnaryCall;
  PhoneVerifyCode(argument: _auth_v1_PhoneVerifyCodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_v1_PhoneVerifyCodeResponse__Output>): grpc.ClientUnaryCall;
  PhoneVerifyCode(argument: _auth_v1_PhoneVerifyCodeRequest, callback: grpc.requestCallback<_auth_v1_PhoneVerifyCodeResponse__Output>): grpc.ClientUnaryCall;
  phoneVerifyCode(argument: _auth_v1_PhoneVerifyCodeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_v1_PhoneVerifyCodeResponse__Output>): grpc.ClientUnaryCall;
  phoneVerifyCode(argument: _auth_v1_PhoneVerifyCodeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_v1_PhoneVerifyCodeResponse__Output>): grpc.ClientUnaryCall;
  phoneVerifyCode(argument: _auth_v1_PhoneVerifyCodeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_v1_PhoneVerifyCodeResponse__Output>): grpc.ClientUnaryCall;
  phoneVerifyCode(argument: _auth_v1_PhoneVerifyCodeRequest, callback: grpc.requestCallback<_auth_v1_PhoneVerifyCodeResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  Introspect: grpc.handleUnaryCall<_auth_v1_IntrospectRequest__Output, _auth_v1_IntrospectResponse>;
  
  PhoneSendCode: grpc.handleUnaryCall<_auth_v1_PhoneSendCodeRequest__Output, _auth_v1_PhoneSendCodeResponse>;
  
  PhoneVerifyCode: grpc.handleUnaryCall<_auth_v1_PhoneVerifyCodeRequest__Output, _auth_v1_PhoneVerifyCodeResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  Introspect: MethodDefinition<_auth_v1_IntrospectRequest, _auth_v1_IntrospectResponse, _auth_v1_IntrospectRequest__Output, _auth_v1_IntrospectResponse__Output>
  PhoneSendCode: MethodDefinition<_auth_v1_PhoneSendCodeRequest, _auth_v1_PhoneSendCodeResponse, _auth_v1_PhoneSendCodeRequest__Output, _auth_v1_PhoneSendCodeResponse__Output>
  PhoneVerifyCode: MethodDefinition<_auth_v1_PhoneVerifyCodeRequest, _auth_v1_PhoneVerifyCodeResponse, _auth_v1_PhoneVerifyCodeRequest__Output, _auth_v1_PhoneVerifyCodeResponse__Output>
}
