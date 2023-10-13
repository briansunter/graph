package elemental2.core;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsArrayLike;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class TypedArray extends ArrayBufferView implements JsIterable<Double>, JsArrayLike<Double> {
  @JsFunction
  public interface EveryCallbackFn {
    Object onInvoke(double p0, double p1, TypedArray p2);
  }

  @JsFunction
  public interface FilterCallbackFn {
    boolean onInvoke(double p0, double p1, TypedArray p2);
  }

  @JsFunction
  public interface FindCallbackFn {
    boolean onInvoke(double p0, double p1, TypedArray p2);
  }

  @JsFunction
  public interface FindIndexCallbackFn {
    boolean onInvoke(double p0, double p1, TypedArray p2);
  }

  @JsFunction
  public interface ForEachCallbackFn {
    Object onInvoke(double p0, double p1, TypedArray p2);
  }

  @JsFunction
  public interface MapCallbackFn {
    double onInvoke(double p0, double p1, TypedArray p2);
  }

  @JsFunction
  public interface ReduceCallbackFn<INIT, RET> {
    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface P0UnionType<INIT, RET> {
      @JsOverlay
      static TypedArray.ReduceCallbackFn.P0UnionType of(Object o) {
        return Js.cast(o);
      }

      @JsOverlay
      default double asDouble() {
        return Js.asDouble(this);
      }

      @JsOverlay
      default INIT asINIT() {
        return Js.cast(this);
      }

      @JsOverlay
      default RET asRET() {
        return Js.cast(this);
      }

      @JsOverlay
      default boolean isDouble() {
        return (Object) this instanceof Double;
      }
    }

    RET onInvoke(
        TypedArray.ReduceCallbackFn.P0UnionType<INIT, RET> p0, double p1, double p2, TypedArray p3);
  }

  @JsFunction
  public interface ReduceRightCallbackFn<INIT, RET> {
    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface P0UnionType<INIT, RET> {
      @JsOverlay
      static TypedArray.ReduceRightCallbackFn.P0UnionType of(Object o) {
        return Js.cast(o);
      }

      @JsOverlay
      default double asDouble() {
        return Js.asDouble(this);
      }

      @JsOverlay
      default INIT asINIT() {
        return Js.cast(this);
      }

      @JsOverlay
      default RET asRET() {
        return Js.cast(this);
      }

      @JsOverlay
      default boolean isDouble() {
        return (Object) this instanceof Double;
      }
    }

    RET onInvoke(
        TypedArray.ReduceRightCallbackFn.P0UnionType<INIT, RET> p0,
        double p1,
        double p2,
        TypedArray p3);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SetArrayUnionType {
    @JsOverlay
    static TypedArray.SetArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ArrayBufferView asArrayBufferView() {
      return Js.cast(this);
    }

    @JsOverlay
    default double[] asDoubleArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isArrayBufferView() {
      return (Object) this instanceof ArrayBufferView;
    }

    @JsOverlay
    default boolean isDoubleArray() {
      return (Object) this instanceof Object[];
    }
  }

  @JsFunction
  public interface SomeCallbackFn {
    boolean onInvoke(double p0, double p1, TypedArray p2);
  }

  @JsFunction
  public interface SortCompareFunctionFn {
    double onInvoke(double p0, double p1);
  }

  public double BYTES_PER_ELEMENT;
  public int length;

  public native <THIS> THIS copyWithin(int target, int start, int end);

  public native <THIS> THIS copyWithin(int target, int start);

  public native JsIteratorIterable<double[]> entries();

  public native <S> boolean every(TypedArray.EveryCallbackFn callback, S thisArg);

  public native boolean every(TypedArray.EveryCallbackFn callback);

  public native <THIS> THIS fill(double value, int begin, int end);

  public native <THIS> THIS fill(double value, int begin);

  public native <THIS> THIS fill(double value);

  public native <THIS, S> THIS filter(TypedArray.FilterCallbackFn callback, S thisArg);

  public native <THIS> THIS filter(TypedArray.FilterCallbackFn callback);

  public native <S> double find(TypedArray.FindCallbackFn callback, S thisArg);

  public native double find(TypedArray.FindCallbackFn callback);

  public native <S> int findIndex(TypedArray.FindIndexCallbackFn callback, S thisArg);

  public native int findIndex(TypedArray.FindIndexCallbackFn callback);

  public native <S> void forEach(TypedArray.ForEachCallbackFn callback, S thisArg);

  public native void forEach(TypedArray.ForEachCallbackFn callback);

  public native boolean includes(double searchElement, int fromIndex);

  public native boolean includes(double searchElement);

  public native int indexOf(double searchElement, int fromIndex);

  public native int indexOf(double searchElement);

  public native String join();

  public native String join(String separator);

  public native JsIteratorIterable<Double> keys();

  public native int lastIndexOf(double searchElement, int fromIndex);

  public native int lastIndexOf(double searchElement);

  public native <THIS, S> THIS map(TypedArray.MapCallbackFn callback, S thisArg);

  public native <THIS> THIS map(TypedArray.MapCallbackFn callback);

  public native <INIT, RET> RET reduce(
      TypedArray.ReduceCallbackFn<? super INIT, RET> callback, INIT initialValue);

  public native <INIT, RET> RET reduce(TypedArray.ReduceCallbackFn<? super INIT, RET> callback);

  public native <INIT, RET> RET reduceRight(
      TypedArray.ReduceRightCallbackFn<? super INIT, RET> callback, INIT initialValue);

  public native <INIT, RET> RET reduceRight(
      TypedArray.ReduceRightCallbackFn<? super INIT, RET> callback);

  public native <THIS> THIS reverse();

  @JsOverlay
  public final void set(ArrayBufferView array, int offset) {
    set(Js.<TypedArray.SetArrayUnionType>uncheckedCast(array), offset);
  }

  @JsOverlay
  public final void set(ArrayBufferView array) {
    set(Js.<TypedArray.SetArrayUnionType>uncheckedCast(array));
  }

  public native void set(TypedArray.SetArrayUnionType array, int offset);

  public native void set(TypedArray.SetArrayUnionType array);

  @JsOverlay
  public final void set(double[] array, int offset) {
    set(Js.<TypedArray.SetArrayUnionType>uncheckedCast(array), offset);
  }

  @JsOverlay
  public final void set(double[] array) {
    set(Js.<TypedArray.SetArrayUnionType>uncheckedCast(array));
  }

  public native <THIS> THIS slice();

  public native <THIS> THIS slice(int begin, int end);

  public native <THIS> THIS slice(int begin);

  public native <S> boolean some(TypedArray.SomeCallbackFn callback, S thisArg);

  public native boolean some(TypedArray.SomeCallbackFn callback);

  public native <THIS> THIS sort();

  public native <THIS> THIS sort(TypedArray.SortCompareFunctionFn compareFunction);

  public native <THIS> THIS subarray(int begin, int end);

  public native <THIS> THIS subarray(int begin);

  public native String toLocaleString();

  @JsMethod(name = "toString")
  public native String toString_();

  public native JsIteratorIterable<Double> values();
}
